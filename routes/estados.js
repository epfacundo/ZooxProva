var router = require('koa-router')();
var estadoSchema = require('../data/schemas/estado');

router.get('/estados', async ctx => {

	await estadoSchema.find()
		.then(docs => {
			ctx.body = docs
		})
		.catch(err => {
			console.log(err);
		});
});

router.get('/estados/:id', async ctx => {

	await estadoSchema.findById(ctx.params.id)
	.then(docs => {
		ctx.body = docs
	})
	.catch(err => {
		console.log(err);
	});
});


router.post('/estados', async ctx => {
	let aSalvar = new estadoSchema(ctx.request.body);
	await aSalvar.save().then(data => {
		ctx.body = data;
	}).catch(err => {
			console.log(err);
		});
});

router.delete('/estados/:id', async ctx => {

	await estadoSchema.findByIdAndRemove(
		 ctx.params.id
	).then(data => {
		ctx.body = {status : "Estado deletado com sucesso"};
	}).catch(err => {
			console.log(err);
		});
});

router.put('/estados', async ctx => {
	ctx.request.body.alteradoEm = Date.now();
	  await estadoSchema.findByIdAndUpdate(
		{_id: ctx.request.body._id}, ctx.request.body
	  )
		.then(() => {
		  ctx.body = { status: 'Task Updated!' }
		})
		.catch(err => {
			console.log(err);
		  ctx.body = 'error: ' + err
		})
  })
module.exports = router;