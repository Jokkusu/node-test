const o="https://lotti-public-bucket.s3.amazonaws.com";async function e(a,c){try{let t=await fetch(o,{method:"POST",body:a});return o+"/"+c}catch(t){console.log(t)}}export{e as u};
