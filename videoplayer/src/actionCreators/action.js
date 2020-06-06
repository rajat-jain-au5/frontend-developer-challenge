

export function submitUrl(url){
      console.log(url)
      return{
            type:"SUBMIT",
            payload:url
      }
}

export function deleteUrl(id){
        return {
          type: "DELETE_URL",
          payload: id,
        };
}

export function addUrl(id){
       return {
         type: "CLICK_URL",
         payload: id,
       };
}

export function deleteEndVideo(id){
      console.log(id)
      return{
            type:"VIDEO_END",
            payload:id
      }
}