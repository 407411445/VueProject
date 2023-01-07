import { ref } from "vue";

export function useFetcharticle(){


    const res = ref([])
    const errorMassage  = ref("");
    const fetchinit = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((data)=>data.json())
            .then((json) => res.value = json )
            .catch ((err)=> errorMassage.value = err) ;
        // try {
        //     const rescon = fetch('https://jsonplaceholder.typicode.com/posts')
        //     res.value = rescon.json();
        //     console.log(res.value);
        // } 
        // catch (error) {
        //     errorMassage.value= error;
        // }
        
    }
    return{
        res,
        errorMassage,
        fetchinit
        
    };
   
}