import {computed, unref} from "vue";
import { useData } from "vitepress";

const defaultLang = 'zh-CN'

export const useLang = () => {
  const data = useData()
  return computed(() => {

    return unref(data.lang) || defaultLang
  })
}
