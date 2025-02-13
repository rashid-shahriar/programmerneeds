<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategories extends Model
{
    /** @use HasFactory<\Database\Factories\SubcategoriesFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'category_id',
    ];

    public function categories()
    {
        return $this->belongsTo(Categories::class);
    }

    public function products()
    {
        return $this->hasOne(Products::class);
    }
}