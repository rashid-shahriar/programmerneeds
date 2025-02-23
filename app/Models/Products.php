<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    /** @use HasFactory<\Database\Factories\ProductsFactory> */
    use HasFactory;

    public function categories()
    {
        return $this->belongsToMany(Categories::class, 'product__categories', 'product_id', 'category_id');
    }


    public function subcategory()
    {
        return $this->belongsTo(Subcategories::class);
    }
}
