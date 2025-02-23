<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    /** @use HasFactory<\Database\Factories\CategoriesFactory> */
    use HasFactory;

    protected $fillable = ['name'];

    public function subcategories()
    {
        return $this->hasMany(Subcategories::class, 'category_id');
    }

    public function products()
    {
        return $this->belongsToMany(Products::class, 'product_categories', 'category_id', 'product_id');
    }
}
