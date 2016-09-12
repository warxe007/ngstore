package ngstore

class Product {

    String name
    String description
    Double price
    byte[] productImage
    //String productImage

    static constraints = {
        name blank:false
        description blank:false
        price blank:false
        productImage(nullable:true, maxSize:1073741824) // max of 4GB
    }
}
