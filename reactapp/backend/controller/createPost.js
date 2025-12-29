const user = require('../modal/user')
const axios = require("axios");
const dotenv = require('dotenv')
exports.createPost =  async(req, res) => {
   try {
    const { name, message, Email ,contact,product} = req.body;


    if (!name || !message || !Email) {
        return res.status(400).json({ message: 'Missing required fields: title, content, or author' });
    }

 
        const newPost = await user.create({ name, Email, message,contact,product }); 
          sendSlack(newPost);

        res.status(201).json({
            success: true,
            message: 'Post created successfully',
            data: newPost,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


    // ==============================================

const sendSlack = async (newPost) => {
  try {
    const slackPayload = {
      text: ` 
 Name: ${newPost.name}
 Email: ${newPost.Email}
Message: ${newPost.message}
Contact: ${newPost.contact}
Product: ${newPost.product}
`,
    };

    await axios.post(
      process.env.SLACK_URL,slackPayload,
      { headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Slack Error:", error.message);
  }
};

