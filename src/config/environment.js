const createEnvironment = () => {
    const environment = {
        database: {
            username: "notRootUserAtAll",
            password: "123456789",
            database: "simple_social_media",
            host: "127.0.0.1",
            dialect: "mysql"
        }
    };
    if(process.env.NODE_ENV === "development") {
        //what should come here?
    }

    return environment;
}

export default createEnvironment();