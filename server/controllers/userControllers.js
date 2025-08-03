import sql from "../configs/db.js";


export const getUserCreations = async (req, res) => {
    try {
        const { userId } = req.auth();

        const creations = await sql `SELECT * FROM creations WHERE user_id = ${userId} ORDER BY created_at DESC`;

        res.json({ success: true, creations });

    } catch (error) {
        res.json({ success: false, message: error.message });

    }
}

export const getPublishedCreations = async (req, res) => {
    try {
        const creations = await sql `SELECT * FROM creations WHERE publish = true ORDER BY created_at DESC`;

        res.json({ success: true, creations });

    } catch (error) {
        res.json({ success: false, message: error.message });

    }
}

export const toggleLikeCreation = async (req, res) => {
    try {
        const { userId } = req.auth();
        const { id } = req.body;

        const [creations] = await sql `SELECT * FROM creations WHERE id = ${id}`;

        if (!creations) {
            return res.json({ success: false, message: 'Creation not found' });
        }
        const currentLikes = creations.likes;
        const userIdStr = userId.toString();
        let updateLikes;
        let message;

        if(currentLikes.includes(userIdStr)){
            updateLikes = currentLikes.filter((user) => user !== userIdStr);
            message = 'unliked';
        } else {
            updateLikes = [...currentLikes, userIdStr];
            message = 'liked';
        }

        const formatedArray =  `{${updateLikes.join(',')}}`;

        await sql `UPDATE creations SET likes = ${formatedArray} :: text[] WHERE id = ${id}`

        res.json({ success: true, message, creations });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}