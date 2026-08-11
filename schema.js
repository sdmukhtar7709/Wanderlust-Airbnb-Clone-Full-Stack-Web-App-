const Joi = require("joi");
module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().min(0).required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    image: Joi.object({
      url: Joi.string().allow("") ,
      filename: Joi.string().allow("")
    })
    ,
    category: Joi.string().valid('homes','experiences','services','beach','mountains','villas','cabins','city','luxury','unique','experiences').required()
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().trim().min(1).required().messages({
      'string.empty': 'Please add a review comment.',
      'string.min': 'Please add a review comment.'
    }),
  }).required()


})