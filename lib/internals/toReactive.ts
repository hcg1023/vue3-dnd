import { isRef, reactive, ref, Ref, ToRef, toRefs, ToRefs } from 'vue'

class ReactiveRefObjectImpl<T extends object, K extends keyof T> {
	public __v_isRef = true

	constructor(
		private readonly _object: Ref<T>,
		private readonly _key: K,
		private readonly _defaultValue?: T[K]
	) {}

	get value() {
		const val = this._object.value[this._key]
		return val === undefined ? (this._defaultValue as T[K]) : val
	}

	set value(newVal) {
		this._object.value[this._key] = newVal
	}
}

export function toRefReactive<T extends object, K extends keyof T>(
	object: Ref<T>,
	key: K,
	defaultValue?: T[K]
): ToRef<T[K]> {
	const val = object.value[key]
	return isRef(val)
		? val
		: (new ReactiveRefObjectImpl(object, key, defaultValue) as any)
}

function toObjectRefs<T extends object>(object: Ref<T>): ToRefs<T> {
	return toRefs(toRefsReactive(object))
}

export function toRefsReactive<T extends object>(ref: Ref<T>): T {
	const ret: any = reactive(Array.isArray(ref.value) ? [] : {})

	for (const key in ref.value) {
		ret[key] = toRefReactive(ref, key as keyof T)
	}

	return ret as T
}

// const a = ref({ name: '1' })
// const name = toRefReactive(a, 'name')
// const { name: name1 } = toRefs(toRefsReactive(a))
// const { name: name2 } = toObjectRefs(a)

/**
 在Vue3中，由于使用reactive生成的对象不能被重新赋值，所以我们一般采用 `const objRef = ref(object)` 的方式来定义一个需要被重复赋值的对象，但是这样的定义会导致读取对象的属性变得繁琐，例如：
 ```ts
 const objRef = ref({ name: 'H', age: 1 })
 objRef.value.name // 'H'
 objRef.value.age  // 1
 ```
 我希望能通过 toRefsReactive 提供一个快捷读取的方式，并且它可以顺利的和toRefs相结合
 ```ts
 const objRef = ref({ name: 'H', age: 1 })
 const obj = toRefsReactive(objRef)
 const { name, age } = toRefs(toRefsReactive(name, age))
 obj.name // 'H'
 name.value // 'H'
 obj.age // 1
 age.value // 1
 ```
 * */
