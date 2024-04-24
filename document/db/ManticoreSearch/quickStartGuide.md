---
title: Manticore Search
titleTemplate: 快速入门指南
outline: 'deep'
---

# 快速入门指南

## 1. 安装并启动Manticore

您可以在各种操作系统上轻松安装和启动Manticore，包括Ubuntu、Centos、Debian、Windows和MacOS。此外，您还可以将Manticore作为Docker容器使用。

## 2. 连接到Manticore

默认情况下，Manticore正在等待您的连接：

- MySQL客户端的端口9306
- 端口9308用于HTTP/HTTPS连接
- 端口9312用于与其他Manticore节点和基于Manticore二进制API的客户端建立连接

::: code-group
``` sql [SQL]
mysql -h0 -P9306
```

``` http [HTTP]
curl -s "http://localhost:9308/search"
```

``` php [PHP]
// https://github.com/manticoresoftware/manticoresearch-php
require_once __DIR__ . '/vendor/autoload.php';
$config = ['host'=>'127.0.0.1','port'=>9308];
$client = new \Manticoresearch\Client($config);
```

``` python [Python]
// https://github.com/manticoresoftware/manticoresearch-python
import manticoresearch
config = manticoresearch.Configuration(
    host = "http://127.0.0.1:9308"
)
client = manticoresearch.ApiClient(config)
indexApi = manticoresearch.IndexApi(client)
searchApi = manticoresearch.SearchApi(client)
utilsApi = manticoresearch.UtilsApi(client)
```

``` java [Java]
// https://github.com/manticoresoftware/manticoresearch-java
import com.manticoresearch.client.*;
import com.manticoresearch.client.model.*;
import com.manticoresearch.client.api.*;
...
ApiClient client = Configuration.getDefaultApiClient();
client.setBasePath("http://127.0.0.1:9308");
...
IndexApi indexApi = new IndexApi(client);
SearchApi searchApi = new UtilsApi(client);
UtilsApi utilsApi = new UtilsApi(client);
```

``` c# [C#]
// https://github.com/manticoresoftware/manticoresearch-net
using System.Net.Http;
...
using ManticoreSearch.Client;
using ManticoreSearch.Api;
using ManticoreSearch.Model;
...
config = new Configuration();
config.BasePath = "http://localhost:9308";
httpClient = new HttpClient();
httpClientHandler = new HttpClientHandler();
...
var indexApi = new IndexApi(httpClient, config, httpClientHandler);
var searchApi = new SearchApi(httpClient, config, httpClientHandler);
var utilsApi = new UtilsApi(httpClient, config, httpClientHandler);
```
:::

## 3. 创建一个表格

现在让我们创建一个名为"products"的表，包含2个字段：

- title 全文字段，将包含我们产品的标题
- price 类型为 "float"

请注意，可以省略使用显式的创建语句来创建表。有关更多信息，请参阅[自动模式](https://manual.manticoresearch.com/Data_creation_and_modification/Adding_documents_to_a_table/Adding_documents_to_a_real-time_table#Auto-schema)。

::: code-group
``` sql [SQL]
create table products(title text, price float) morphology='stem_en';
```

``` http [HTTP]
POST /cli -d "create table products(title text, price float) morphology='stem_en'"
```

``` php [PHP]
$index = new \Manticoresearch\Index($client);
$index->setName('products');
$index->create([
    'title'=>['type'=>'text'],
    'price'=>['type'=>'float'],
],['morphology' => 'stem_en']);
```

``` python [Python]
utilsApi.sql('create table products(title text, price float) morphology=\'stem_en\'')
```

``` java [Java]
utilsApi.sql("create table products(title text, price float) morphology='stem_en'");
```

``` c# [C#]
utilsApi.Sql("create table products(title text, price float) morphology='stem_en'");
```
:::

## 4. 添加数据

现在让我们向表格中添加一些数据：

::: code-group
``` sql [SQL]
insert into products(title,price) values ('Crossbody Bag with Tassel', 19.85), ('microfiber sheet set', 19.99), ('Pet Hair Remover Glove', 7.99);
```

``` http [HTTP]
POST /insert
{
  "index":"products",
  "doc":
  {
    "title" : "Crossbody Bag with Tassel",
    "price" : 19.85
  }
}


POST /insert
{
  "index":"products",
  "doc":
  {
    "title" : "microfiber sheet set",
    "price" : 19.99
  }
}

POST /insert
{
  "index":"products",
  "doc":
  {
    "title" : "Pet Hair Remover Glove",
    "price" : 7.99
  }
}
```

``` php [PHP]
$index->addDocuments([
        ['title' => 'Crossbody Bag with Tassel', 'price' => 19.85],
        ['title' => 'microfiber sheet set', 'price' => 19.99],
        ['title' => 'Pet Hair Remover Glove', 'price' => 7.99]
]);
```

``` python [Python]
indexApi.insert({"index" : "products", "doc" : {"title" : "Crossbody Bag with Tassel", "price" : 19.85}})
indexApi.insert({"index" : "products", "doc" : {"title" : "microfiber sheet set", "price" : 19.99}})
indexApi.insert({"index" : "products", "doc" : {"title" : "Pet Hair Remover Glove", "price" : 7.99}})
```

``` java [Java]
InsertDocumentRequest newdoc = new InsertDocumentRequest();
HashMap<String,Object> doc = new HashMap<String,Object>(){{
    put("title","Crossbody Bag with Tassel");
    put("price",19.85);
}};
newdoc.index("products").setDoc(doc);
sqlresult = indexApi.insert(newdoc);

newdoc = new InsertDocumentRequest();
doc = new HashMap<String,Object>(){{
    put("title","microfiber sheet set");
    put("price",19.99);
}};
newdoc.index("products").setDoc(doc);
sqlresult = indexApi.insert(newdoc);

newdoc = new InsertDocumentRequest();
doc = new HashMap<String,Object>(){{
    put("title","Pet Hair Remover Glove");
    put("price",7.99);
 }};
newdoc.index("products").setDoc(doc);
indexApi.insert(newdoc);
```

``` c# [C#]
Dictionary<string, Object> doc = new Dictionary<string, Object>(); 
doc.Add("title","Crossbody Bag with Tassel");
doc.Add("price",19.85);
InsertDocumentRequest insertDocumentRequest = new InsertDocumentRequest(index: "products", doc: doc);
sqlresult = indexApi.Insert(insertDocumentRequest);

doc = new Dictionary<string, Object>(); 
doc.Add("title","microfiber sheet set");
doc.Add("price",19.99);
insertDocumentRequest = new InsertDocumentRequest(index: "products", doc: doc);
sqlresult = indexApi.Insert(insertDocumentRequest);

doc = new Dictionary<string, Object>(); 
doc.Add("title","Pet Hair Remover Glove");
doc.Add("price",7.99);
insertDocumentRequest = new InsertDocumentRequest(index: "products", doc: doc);
sqlresult = indexApi.Insert(insertDocumentRequest);
```
:::

## 5. 搜索

让我们找到其中一个数据。我们将使用的查询是“remove hair”。正如您所看到的，它找到了一个标题为“Pet Hair Remover Glove”的文件，并在其中突出显示了“Hair remover”一词，尽管查询中使用的是“remove”，而不是“remover”。

这是因为在创建表格时，我们打开了使用英语词干处理（ morphology "stem_en" ）。

::: code-group
``` sql [SQL]
select id, highlight(), price from products where match('remove hair');
```

``` http [HTTP]
POST /search
{
  "index": "products",
  "query": { "match": { "title": "remove hair" } },
  "highlight":
  {
    "fields": ["title"]
  }
}
```

``` php [PHP]
$result = $index->search('@title remove hair')->highlight(['title'])->get();
foreach($result as $doc)
{
    echo "Doc ID: ".$doc->getId()."\n";
    echo "Doc Score: ".$doc->getScore()."\n";
    echo "Document fields:\n";
    print_r($doc->getData());
    echo "Highlights: \n";
    print_r($doc->getHighlight());
}
```

``` python [Python]
searchApi.search({"index":"products","query":{"query_string":"@title remove hair"},"highlight":{"fields":["title"]}})
```

``` java [Java]
query = new HashMap<String,Object>();
query.put("query_string","@title remove hair");
searchRequest = new SearchRequest();
searchRequest.setIndex("forum");
searchRequest.setQuery(query);
HashMap<String,Object> highlight = new HashMap<String,Object>(){{
    put("fields",new String[] {"title"});

}};
searchRequest.setHighlight(highlight);
searchResponse = searchApi.search(searchRequest);
```

``` c# [C#]
object query =  new { query_string="@title remove hair" };
var searchRequest = new SearchRequest("products", query);
var highlight = new Highlight();
highlight.Fieldnames = new List<string> {"title"};
searchRequest.Highlight = highlight;
searchResponse = searchApi.Search(searchRequest);
```
:::

## 6. 更新

假设我们现在想要更新文档 - 将价格更改为18.5。这可以通过按任何字段进行过滤来完成，但通常您知道文档的ID并基于此进行更新。

::: code-group
``` sql [SQL]
update products set price=18.5 where id = 1513686608316989452;
```

``` http [HTTP]
POST /update
{
  "index": "products",
  "id": 1513686608316989452,
  "doc":
  {
    "price": 18.5
  }
}
```

``` php [PHP]
$doc = [
    'body' => [
        'index' => 'products',
        'id' => 2,
        'doc' => [
            'price' => 18.5
        ]
    ]
];

$response = $client->update($doc);
```

``` python [Python]
indexApi = api = manticoresearch.IndexApi(client)
indexApi.update({"index" : "products", "id" : 1513686608316989452, "doc" : {"price":18.5}})
```

``` java [Java]
UpdateDocumentRequest updateRequest = new UpdateDocumentRequest();
doc = new HashMap<String,Object >(){{
    put("price",18.5);
}};
updateRequest.index("products").id(1513686608316989452L).setDoc(doc);
indexApi.update(updateRequest);
```

``` c# [C#]
Dictionary<string, Object> doc = new Dictionary<string, Object>();
doc.Add("price", 18.5);
UpdateDocumentRequest updateDocumentRequest = new UpdateDocumentRequest(index: "products", id: 1513686608316989452L, doc: doc);
indexApi.Update(updateDocumentRequest);
```
:::

## 7. 删除

现在让我们删除所有价格低于10的数据。

::: code-group
``` sql [SQL]
delete from products where price < 10;
```

``` http [HTTP]
POST /delete
{
  "index": "products",
  "query":
  {
    "range":
    {
      "price":
      {
        "lte": 10
      }
    }
  }
}
```

``` php [PHP]
$result = $index->deleteDocuments(new \Manticoresearch\Query\Range('price',['lte'=>10]));
```

``` python [Python]
indexApi.delete({"index" : "products", "query": {"range":{"price":{"lte":10}}}})
```

``` java [Java]
DeleteDocumentRequest deleteRequest = new DeleteDocumentRequest();
query = new HashMap<String,Object>();
query.put("range",new HashMap<String,Object>(){{
    put("price",new HashMap<String,Object>(){{
        put("lte",10);
    }});
}});
deleteRequest.index("products").setQuery(query);
indexApi.delete(deleteRequest);
```

``` c# [C#]
Dictionary<string, Object> price = new Dictionary<string, Object>();
price.Add("lte", 10);
Dictionary<string, Object> range = new Dictionary<string, Object>();
range.Add("price", price);
DeleteDocumentRequest deleteDocumentRequest = new DeleteDocumentRequest(index: "products", range: range);
indexApi.Delete(deleteDocumentRequest);
```
:::








