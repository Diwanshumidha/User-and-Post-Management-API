const prisma = require("../prisma");

exports.createPost = async (req, res) => {
  try {
    const { slug, title, body, authorId } = req.body;
    const result = await prisma.post.create({
      data: {
        slug,
        title,
        body,
        author: { connect: { id: authorId } },
      },
    });
    res.json(result);
  } catch (error) {
    throw new Error(error);
  }
};

exports.updatePost = async (req, res, next) => {
  const { id } = req.params;
  const {title , body} = req.body

  try {
    const result = await prisma.post.update({
        where:{id:id},
        data:{
            title,
            body
        }
    })

    res.json(result)
  } catch (error) {
    res.json({error: `Post with ${id} does not exist`})
  }
};

exports.deletePost = async (req, res, next) => {
    const { id } = req.params;
  
    try {
      const result = await prisma.post.delete({
          where:{id:id}
      })
  
      res.json({success:true})
    } catch (error) {
      res.json({error: `Post with ${id} does not exist`})
    }
  };
