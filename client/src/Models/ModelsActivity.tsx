export default interface MA{
    id:number;
    attibutes:{
        title: String;
        description: String;
        details: String;
        StartActivity: Date;
        EndActivity: Date;
        image: {
            data : {
                attibutes: {
                    url: string;
                }
            }
        }
    }
}