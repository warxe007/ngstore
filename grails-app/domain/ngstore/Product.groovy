package ngstore

class Product {

    String name
    String description
    Double price

    static constraints = {
        name blank:false
        description blank:false
        price blank:false
    }
}
