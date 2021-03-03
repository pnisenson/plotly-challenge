function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

d3.json("samples.json").then((data) => {
	console.log(data);
	console.log(data.samples[0].otu_ids)
	var sample = data.samples
	console.log(sample) 
	sample.forEach(data=>{
		console.log(data.otu_ids[0,10])
	})
	var topten = unpack(data, 0)
	console.log(topten)


})