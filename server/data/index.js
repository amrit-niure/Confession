import mongoose from "mongoose";

const userIds = [
    
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

export const posts = [
    {
        _id : new mongoose.Types.ObjectId(),
        userId : userIds[0],
        name : "Amrit Niure",
       heading : "I cheated on my Girlfriend",
       description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eum!",
        category : 'Betrayal',
        likes : 0,
        comments : [
            'Random Commnet',
            "Jay Nepal"
        ],

    },
    {
        _id : new mongoose.Types.ObjectId(),
        userId : userIds[1],
        name : "Bibek Ghimire",
       heading : "Life is beautiful",
       description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eum!",
        category : 'Life',
        likes :0,
        comments : [
            'Random Commnet',
            "Jay Nepal"
        ],

    },
    {
        _id : new mongoose.Types.ObjectId(),
        userId : userIds[2],
        name : "Bravo",
       heading : "I saw her cheating.",
       description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eum!",
        category : 'Betrayal',
        likes : 0,
        comments : [
            'Random Commnet',
            "Jay Nepal"
        ],

    },
]