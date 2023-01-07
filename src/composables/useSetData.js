import { readonly, ref } from "vue";

export function useSetData(val){
    const data = ref(val);
    
    const setnewData = () =>{
        console.log(data);
        data.value ++;
        // data.value = val
    };
    return{
        data:readonly(data),
        setnewData
    };
}


