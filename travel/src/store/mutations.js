

export default{
    changeCity(state, city) {
        // mutations 调用 mutate 更新state的值
        state.city = city
        try {
            localStorage.city = city
        } catch (error) {

        }


    }
}