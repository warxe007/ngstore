package ngstore

class UrlMappings {

    static mappings = {

        get "/product"(controller:"product", action:"index")
        post "/product"(controller:"product", action:"save")
        put "/product/"(controller:"product", action:"update")

        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view: '/index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
