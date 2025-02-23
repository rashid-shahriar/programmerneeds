<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Http\Requests\StoreProductsRequest;
use App\Http\Requests\UpdateProductsRequest;
use App\Models\Categories;
use App\Models\Subcategories;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function filterPorducts(Request $request, $slug)
    {
        // Find category or subcategory
        $category = Categories::where('slug', $slug)->first();
        $subcategory = Subcategories::where('slug', $request->slug)->first();

        if (!$category && !$subcategory) {
            return response()->json(['message' => 'Category or Subcategory not found'], 404);
        }

        // Query products that belong to the category (many-to-many)
        $query = Products::query()->with('categories');

        if ($category) {
            $query->where('category_id', $category->id);
        }

        if ($subcategory) {
            $query->where('subcategory_id', $subcategory->id);
        }

        $products = $query->get();

        return Inertia::render('CategoryShow', [
            'category' => $category,
            'subcategory' => $subcategory,
            'products' => $products
        ]);
    }

    public function index()
    {
        $products = Products::all();
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Products $products, $slug)
    {
        $product = Products::where('slug', $slug)->first();

        return Inertia::render('Products', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Products $products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductsRequest $request, Products $products)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Products $products)
    {
        //
    }
}
