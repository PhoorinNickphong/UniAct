export default interface kitjakum {
    id: number,
    attributes: {
        title: string,
        description: string,
        StartActivity: string,
        EndActivity: string,
        StartRegistration: string,
        EndRegistration: string,
        Number: number,
        Typeregister: string,
        Image: {
            data: [
                {
                    id: number,
                    attributes: {
                        name: string,
                        alternativeText: null,
                        caption: null,
                        width: 954,
                        height: 298,
                        formats: {
                            thumbnail: {
                                name: string,
                                hash: string,
                                ext: string,
                                mime: string,
                                path: null,
                                width: number,
                                height: number,
                                size: number,
                                url: string
                            },

                        },
                        hash: string,
                        ext: string,
                        mime: string,
                        size: number,
                        url: string,
                        previewUrl: null,
                        provider: string,
                        provider_metadata: null,
                        createdAt: string,
                        updatedAt: string
                    }
                }
            ]
        },
        catagories: {
            data: [
                {
                    id: 2,
                    attributes: {
                        title: string,
                    }
                }
            ]
        },
        FirstComeFirstServe: [
            {
                id: 5
            }
        ],
        Candidate: []
    }
}
