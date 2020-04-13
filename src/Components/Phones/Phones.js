import React, { Component } from 'react'
import Phonesrender from '../Phones/Phonesrender'
import Toolbar from '../Toolbar/Toolbar'
import Basket from '../Basket/Basket'
import Modal from '../Modal/Modal'
import Backdrop from '../Backdrop/Backdrop'


class Phones extends Component {
    state={
        phones:[],
        filteredPhones:[],
        cartItems:[],
        isopen:false
    }
    

    componentWillMount(){
        fetch("http://localhost:8002/phones/").then(res=>res.json())
        .then(data=>this.setState({
            phones:data,
            filteredPhones:data
        })); 
    }

    isopen=() =>{
        this.setState({isopen:true})
    }

    backdropClickHandler=()=>{
        this.setState({isopen:false})
    }



    handleRemoveFromCart=(e,item)=>{
        this.setState(state=>{
            const cartItems= state.cartItems.filter(elm=>elm.id!==item.id);
            localStorage.setItem('cartItem',cartItems);
            return{cartItems};
        });

    }

    handleAddToCart=(e,phone)=>{
        this.setState(state=>{
            const cartItems= this.state.cartItems;
            let productinCart=false;
            cartItems.forEach(item=>{
                if(item.id===phone.id){
                    productinCart=true;
                    item.count++;
                }
            });

            if(!productinCart){
                cartItems.push({...phone, count:1});
            }

            localStorage.setItem("cartItem",JSON.stringify(cartItems));
            return cartItems
        })

    }
    render(){
        let backdrop;
        let modal ;
        if(this.state.isopen){
            modal =  <Modal show={this.state.isopen} modalClosed={this.isclosed}>
    
            <div> 
            <Basket  cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}/>
            </div>   
        </Modal>
        backdrop=<Backdrop click={this.backdropClickHandler}/>
        }

        return(
            <div>
                {/* <Toolbar clicked={this.isopen}/> */}
                <Toolbar/>
                {backdrop}
                {modal}
                <Phonesrender phone={this.state.phones}  handleAddToCart={this.handleAddToCart}/>
               


            </div>
        )
    

}
}

export default Phones;