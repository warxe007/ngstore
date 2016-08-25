import ngstore.security.Role
import ngstore.security.User
import ngstore.security.UserRole
import ngstore.Product

class BootStrap {

    def init = { servletContext ->
        def superAdminRole = new Role(authority: 'ROLE_SUPER_ADMIN').save()
        def adminRole = new Role(authority: 'ROLE_ADMIN').save()
        def userRole = new Role(authority: 'ROLE_USER').save()

        def testSuperAdminUser = new User(username: 'superadmin', password: 'superadmin', firstName: 'Aaron', lastName: 'Arce Hernandez').save()
        def testAdminUser = new User(username: 'admin', password: 'admin', firstName: 'Aaron', lastName: 'Arce Hernandez').save()
        def testUser = new User(username: 'user', password: 'user', firstName: 'Aaron', lastName: 'Arce Hernandez').save()

        UserRole.create testSuperAdminUser, superAdminRole
        UserRole.create testAdminUser, adminRole
        UserRole.create testUser, userRole

        UserRole.withSession {
            it.flush()
            it.clear()
        }

        new Product(name:"Product 1", description:"Descroption 1.", price:"80").save()
        new Product(name:"Product 2", description:"Descroption 2.", price:"95").save()
        new Product(name:"Product 3", description:"Descroption 3.", price:"110").save()
    }

    def destroy = {
    }
}
