<div class="spinner">
  <div class="cube cube0"></div>
  <div class="cube cube1"></div>
  <div class="cube cube2"></div>
  <div class="cube cube3"></div>
</div>
<div class="page-content">
	<section class="path-section">
	<div class="name">Hello there, <%= first_name %></div>
	<h1 id="title-message">Customize your free t-shirt</h1>
	<div class="form-txt">Choose a design</div>
	<div class="slider-wrapper slider">
		<ul class="answer-list tshirt-slides slides"><!--
			<?php foreach($tshirts as $key=>$tshirt): ?>
			--><li data-slide-image="<?php echo base_url(); ?>images/thumbs/tshirts/<?php echo $tshirt->design_id; ?>.jpg" data-slide-id="<?php echo $tshirt->design_id; ?>" class="slide">
				<div class="answer-inner"><a></a></div>
			</li><!--
			<?php endforeach; ?>
		--></ul>
		<ul class="slider-nav-arrows"><li data-id="prev" class="prev-btn"><a>Prev</a></li><li data-id="next" class="next-btn"><a>Next</a></li></ul>
		<div class="slider-nav-dots-holder clearfix">
			<ul class="slider-nav-dots"><!--
				<?php foreach($tshirts as $key=>$tshirt): ?>
				--><li data-slide-id="<?php echo $tshirt->design_id; ?>" class="slider-nav-dot"></li><!--
				<?php endforeach; ?>
			--></ul>
		</div>
	</div>

	<!-- TSHIRT ORDER FORM -->
	<div id="form-container">
		<form id="order-form" class="tshirt-form">
			<input name="ref_client_id" id="client-id" type="hidden" value="<%= id %>"/>
			<input name="design" id="tshirt-design" type="hidden"/>
			<div class="form-txt">Pick a size</div>
			<div class="tshirt-size-holder clearfix">
				<input type="radio" name="size" id="sml" value="sml">
				<label for="sml" class="form-btn">sml</label>
				<input type="radio" name="size" id="med" value="med" checked>
				<label for="med" class="form-btn">med</label>
				<input type="radio" name="size" id="lrg" value="lrg">
				<label for="lrg" class="form-btn">lrg</label>
				<input type="radio" name="size" id="xlr" value="xlr">
				<label for="xlr" class="form-btn">xlr</label>
			</div>
			<!-- <div class="form-txt">Pick a color</div>
			<div class="tshirt-color-holder clearfix">
				<input type="radio" name="color" id="color-1" value="color-1" checked>
				<label for="color-1" class="form-btn color-1">color-1</label>
				<input type="radio" name="color" id="color-2" value="color-2">
				<label for="color-2" class="form-btn color-2">color-2</label>
			</div> -->
			<div class="form-txt">Confirm your mailing info</div>
			<div class="txt-holder clearfix">
				<label for="address" class="form-txt color">address</label>
				<input type="text" name="address" id="address" value="<%= address %>">
				<label for="city" class="form-txt color">city</label>
				<input type="text" name="city" id="city" value="<%= city %>" />
				<div class="state-zip-holder clearfix">
					<div class="state-holder clearfix">
						<label for="state" class="form-txt">state</label>
						<select class="state" name="state">
							<?php foreach ($states as $key => $state): ?>
							<option value="<?php echo $state->state_abbr; ?>"><?php echo $state->state_name; ?></option>
							<?php endforeach; ?>
						</select>
					</div>
					<div class="zip-holder">
						<label for="zip" class="form-txt zip">zip code</label>
						<input type="text" name="zip" id="zip" value="<%= zip %>">
					</div>
				</div>
				<span class="error"></span>
				<input type="submit" class="form-btn" value="submit">
			</div>
		</form>
	</div>
</section>
</div>