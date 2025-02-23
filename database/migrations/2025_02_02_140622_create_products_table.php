<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->decimal('price', 8, 2)->nullable();
            $table->string('image')->nullable();
            $table->foreignId('category_id')->nullable()->constrained()->onDelete('cascade');
            $table->foreignId('subcategory_id')->nullable()->constrained('subcategories')->onDelete('set null');
            $table->foreignId('author_id')->nullable()->constrained('authors')->onDelete('set null');
            $table->unsignedTinyInteger('star_rating')->nullable()->default(0);
            $table->date('release_date')->nullable();
            $table->date('last_updated')->nullable();
            $table->integer('total_user')->nullable()->default(0);
            $table->integer('total_download')->nullable()->default(0);
            $table->foreignId('platform_id')->nullable()->constrained()->onDelete('cascade');
            $table->string('product_url')->nullable();
            $table->enum('status', ['active', 'discontinued', 'beta'])->nullable()->default('active');
            $table->string('tags')->nullable();
            $table->string('creator')->nullable();
            $table->string('publisher')->nullable();
            $table->string('developer')->nullable();
            $table->text('notes')->nullable();
            $table->integer('version')->nullable()->default(0);
            $table->integer('size')->nullable()->default(0);
            $table->string('barcode')->nullable();
            $table->integer('order')->nullable();
            $table->boolean('featured')->default(false);
            $table->string('external_url')->nullable();
            $table->string('slug')->unique();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
