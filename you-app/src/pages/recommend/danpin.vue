<template>
    <div id="danpin">
        <h1>时尚单品</h1>
    </div>
</template>

<script>
import {getDanPin} from '../../services/recommendService.js'
export default {
    created(){
    console.log(1);
        getDanPin().then((data)=>{
            console.log(data);
        })
    }
}
</script>

<style lang="scss" scoped>

</style>

