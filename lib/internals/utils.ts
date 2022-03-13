import { cloneVNode, Fragment, VNode, isVNode } from 'vue'

export function isValid(value: any): boolean {
	return value !== undefined && value !== null && value !== ''
}

export function isEmptyElement(c: any) {
	return (
		c.type === Comment ||
		(c.type === Fragment && c.children.length === 0) ||
		(c.type === Text && c.children.trim() === '')
	)
}

export function isValidElement(element: any) {
	return isVNode(element) && typeof element.type !== 'symbol' // remove text node
}

export const flattenChildren = (children: any[] = [], filterEmpty = true) => {
	const temp = Array.isArray(children) ? children : [children]
	const res: any[] = []
	temp.forEach(child => {
		if (Array.isArray(child)) {
			res.push(...flattenChildren(child, filterEmpty))
		} else if (child && child.type === Fragment) {
			res.push(...flattenChildren(child.children, filterEmpty))
		} else if (child && isVNode(child)) {
			if (filterEmpty && !isEmptyElement(child)) {
				res.push(child)
			} else if (!filterEmpty) {
				res.push(child)
			}
		} else if (isValid(child)) {
			res.push(child)
		}
	})
	return res
}

export function filterEmpty(children: any[] = []) {
	const res: any[] = []
	children.forEach(child => {
		if (Array.isArray(child)) {
			res.push(...child)
		} else if (child.type === Fragment) {
			res.push(...child.children)
		} else {
			res.push(child)
		}
	})
	return res.filter(c => !isEmptyElement(c))
}

export function cloneElement(
	vnode: VNode,
	nodeProps = {},
	override = true,
	mergeRef = false
) {
	let ele = vnode
	if (Array.isArray(vnode)) {
		ele = filterEmpty(vnode)[0]
	}
	if (!ele) {
		return null
	}
	const node = cloneVNode(ele, nodeProps, mergeRef)

	// cloneVNode内部是合并属性，这里改成覆盖属性
	node.props = override ? { ...node.props, ...nodeProps } : node.props
	return node
}

export function cloneVNodes(vnodes: VNode[], nodeProps = {}, override = true) {
	return vnodes.map(vnode => cloneElement(vnode, nodeProps, override))
}

export function isString(arg: unknown): arg is string {
	return typeof arg === 'string'
}

export function getPropByPath(obj: any, namePathList: any, strict?: boolean) {
	let tempObj = obj

	const keyArr = namePathList
	let i = 0
	try {
		for (let len = keyArr.length; i < len - 1; ++i) {
			if (!tempObj && !strict) break
			const key = keyArr[i]
			if (key in tempObj) {
				tempObj = tempObj[key]
			} else {
				if (strict) {
					throw Error('please transfer a valid name path to form item!')
				}
				break
			}
		}
		if (strict && !tempObj) {
			throw Error('please transfer a valid name path to form item!')
		}
	} catch (error) {
		console.error('please transfer a valid name path to form item!')
	}

	return {
		o: tempObj,
		k: keyArr[i],
		v: tempObj ? tempObj[keyArr[i]] : undefined,
	}
}

export function toArray<T>(value?: T | T[] | null): T[] {
	if (value === undefined || value === null) {
		return []
	}

	return Array.isArray(value) ? value : [value]
}
