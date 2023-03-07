export default interface kitjakum {
    id: number,
    attributes: {
        title: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        StartActivity: string,
        EndActivity: string,
        StartRegistration: string,
        EndRegistration: string,
        Number: number,
        Contact: string,
        Typeregister: string,
        image: {
            data: 
                {
                    id: number,
                    attributes: {
                        name: string;
                        alternativeText: string | null;
                        caption: string | null;
                        width: number;
                        height: number;
                        formats: {
                            thumbnail: {
                                name: string;
                                hash: string;
                                ext: string;
                                mime: string;
                                path: string | null;
                                width: number;
                                height: number;
                                size: number;
                                url: string;

                            },
                        },
                        hash: string;
                        ext: string;
                        mime: string;
                        size: number;
                        url: string;
                        previewUrl: string | null;
                        provider: string;
                        provider_metadata: any | null;
                        createdAt: string;
                        updatedAt: string;

                    }
                }
            
        },
        catagories: {
            data: string
        },
        FirstComeFirstServe: [      
            {
                id: number
            }
        ],
        Candidate: []
    }
}   