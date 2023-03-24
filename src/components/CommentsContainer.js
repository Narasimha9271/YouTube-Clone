import React from "react";

const commentdata = [
    {
        name: "Narasimha",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Narasimha",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Narasimha",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
            },
            {
                name: "Narasimha",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Narasimha",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Narasimha",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    {
                                        name: "Narasimha",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [
                                            {
                                                name: "Narasimha",
                                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                replies: [
                                                    {
                                                        name: "Narasimha",
                                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                        replies: [
                                                            {
                                                                name: "Narasimha",
                                                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                                replies: [
                                                                    {
                                                                        name: "Narasimha",
                                                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                                        replies:
                                                                            [
                                                                                {
                                                                                    name: "Narasimha",
                                                                                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                                                    replies:
                                                                                        [],
                                                                                },
                                                                            ],
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        name: "Narasimha",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },

    {
        name: "Narasimha",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Narasimha",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Narasimha",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
            },
            {
                name: "Narasimha",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Narasimha",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Narasimha",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    {
                                        name: "Narasimha",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [
                                            {
                                                name: "Narasimha",
                                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                replies: [],
                                            },
                                        ],
                                    },
                                    {
                                        name: "Narasimha",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Narasimha",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Narasimha",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Narasimha",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
];

const Comment = ({ data }) => {
    const { name, text, replies } = data;

    return (
        <div className="flex shadow-sm my-2 bg-gray-100 p-2 rounded">
            <img
                className="w-8 h-8"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                alt="user-logo"
            />
            <div className="px-3 ">
                <p className="font-bold"> {name} </p> <p> {text} </p>{" "}
            </div>{" "}
        </div>
    );
};

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} />{" "}
            <div className="pl-5 border border-l-black ml-5">
                <CommentList comments={comment.replies} />{" "}
            </div>{" "}
        </div>
    ));
};

const CommentsContainer = () => {
    return (
        <div>
            <p className="text-xl p-2 m-2 font-bold border-b-2"> Comments </p>{" "}
            <CommentList comments={commentdata} />{" "}
        </div>
    );
};

export default CommentsContainer;
