import ngstore.security.Role
import ngstore.security.User
import ngstore.security.UserRole

class BootStrap {

    def init = { servletContext ->
        def superAdminRole = new Role(authority: 'ROLE_SUPER_ADMIN').save()
        def adminRole = new Role(authority: 'ROLE_ADMIN').save()
        def userRole = new Role(authority: 'ROLE_USER').save()

        def testSuperAdminUser = new User(username: 'superadminuser', password: 'superadminuser', firstName: 'Aaron', lastName: 'Arce Hernandez').save()
        def testAdminUser = new User(username: 'adminuser', password: 'adminuser').save()
        def testUser = new User(username: 'user', password: 'user').save()

        UserRole.create testSuperAdminUser, superAdminRole

        UserRole.withSession {
            it.flush()
            it.clear()
        }
    }
    def destroy = {
    }
}
